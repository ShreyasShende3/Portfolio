import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement IntersectionObserver — stub it so components that
// use it (e.g. the nav scrollspy) don't crash in tests.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
