import type { DOMCheck } from './exercises';

export interface DOMCheckResult {
  check: DOMCheck;
  passed: boolean;
  message: string;
}

function runCheck(doc: Document, check: DOMCheck): DOMCheckResult {
  switch (check.type) {
    case 'element-exists': {
      const el = doc.querySelector(check.selector);
      return {
        check,
        passed: !!el,
        message: el
          ? `Found <${check.selector}>`
          : check.hint || `Could not find "${check.selector}"`,
      };
    }
    case 'element-count': {
      const els = doc.querySelectorAll(check.selector);
      const expected = check.expected as number;
      return {
        check,
        passed: els.length === expected,
        message: els.length === expected
          ? `Found ${els.length} <${check.selector}> elements`
          : `Expected ${expected} <${check.selector}> elements, found ${els.length}. ${check.hint || ''}`,
      };
    }
    case 'has-text': {
      const el = doc.querySelector(check.selector);
      if (!el) {
        return {
          check,
          passed: false,
          message: `Could not find "${check.selector}". ${check.hint || ''}`,
        };
      }
      const text = (el.textContent || '').trim();
      const expected = check.expected as string;
      const matches = text.includes(expected);
      return {
        check,
        passed: matches,
        message: matches
          ? `"${check.selector}" contains "${expected}"`
          : `"${check.selector}" text is "${text}", expected to contain "${expected}". ${check.hint || ''}`,
      };
    }
    case 'has-attr': {
      const el = doc.querySelector(check.selector);
      if (!el) {
        return {
          check,
          passed: false,
          message: `Could not find "${check.selector}". ${check.hint || ''}`,
        };
      }
      const attrName = check.attr!;
      const attrVal = el.getAttribute(attrName);
      const expected = check.expected as string;
      const matches = attrVal === expected;
      return {
        check,
        passed: matches,
        message: matches
          ? `<${check.selector}> has ${attrName}="${attrVal}"`
          : `<${check.selector}> ${attrName}="${attrVal || ''}", expected "${expected}". ${check.hint || ''}`,
      };
    }
    default:
      return { check, passed: false, message: 'Unknown check type' };
  }
}

export function runDOMChecks(html: string, checks: DOMCheck[]): Promise<DOMCheckResult[]> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    document.body.appendChild(iframe);

    const cleanup = () => {
      try { document.body.removeChild(iframe); } catch {}
    };

    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) {
          cleanup();
          resolve(checks.map(c => ({ check: c, passed: false, message: 'Could not access iframe document' })));
          return;
        }
        const results = checks.map(check => runCheck(doc, check));
        cleanup();
        resolve(results);
      } catch (err) {
        cleanup();
        resolve(checks.map(c => ({ check: c, passed: false, message: String(err) })));
      }
    };

    iframe.addEventListener('load', handleLoad, { once: true });
    iframe.srcdoc = html;

    iframe.addEventListener('error', () => {
      cleanup();
      resolve(checks.map(c => ({ check: c, passed: false, message: 'iframe failed to load' })));
    });
  });
}
