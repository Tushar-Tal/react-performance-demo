import ConcurrentHome from "../components/concurrent/0-concurrent";
import StartTransitions from "../components/concurrent/1-start-transitions";
import ConcurrentTransitions from "../components/concurrent/1-start-transitions";
import UseTransitions from "../components/concurrent/2-use-transitions";
import UseDeferredValue from "../components/concurrent/3-use-deffered";
import ConcurrentContext from "../components/memoization/6-context";
import Home from "../components/home/home";
import MemoizationHome from "../components/memoization/0-memoization-home";
import ReactMemo from "../components/memoization/1-react-memo";
import UseMemo from "../components/memoization/2-use-memo";
import UseCallback from "../components/memoization/3-use-callback";
import UseRef from "../components/memoization/4-use-ref";
import UseRefNew from "../components/memoization/5-use-ref";
import InlineHome from "../components/rendering/inline-functions/0-inline-home";
import Inline from "../components/rendering/inline-functions/1-inline";
import InlineFixed from "../components/rendering/inline-functions/2-inline-fixed";
import InlineProp from "../components/rendering/inline-functions/3-inline-prop";
import InlinePropFixed from "../components/rendering/inline-functions/4-inline-prop-fixed";
import KeyHome from "../components/rendering/key-prop/0-key-home";
import { KeyDictionary } from "../components/rendering/key-prop/1-key-list";
import { KeyLabel } from "../components/rendering/key-prop/2-key-lable";
import LazyMountingHome from "../components/rendering/lazy-mounting/0-lazy-mounting-home";
import LazyLoading from "../components/rendering/lazy-mounting/1-lazy-loading";
import EagerLoading from "../components/rendering/lazy-mounting/2-eager-loading";
import NestedHome from "../components/rendering/nested-components/0-nested-home";
import NestedApp from "../components/rendering/nested-components/1-nested-component";
import NestedAppFixed from "../components/rendering/nested-components/2-nested-app-fixed";
import Context from "../components/memoization/6-context";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/rendering/inline",
    component: InlineHome,
    exact: true,
  },
  {
    path: "/rendering/inline-1",
    component: Inline,
    exact: true,
  },
  {
    path: "/rendering/inline-1-fixed",
    component: InlineFixed,
    exact: true,
  },
  {
    path: "/rendering/inline-2",
    component: InlineProp,
    exact: true,
  },
  {
    path: "/rendering/inline-3-fixed",
    component: InlinePropFixed,
    exact: true,
  },
  {
    path: "/rendering/key",
    component: KeyHome,
    exact: true,
  },
  {
    path: "/rendering/key-1",
    component: KeyDictionary,
    exact: true,
  },
  {
    path: "/rendering/key-2",
    component: KeyLabel,
    exact: true,
  },
  {
    path: "/rendering/nested",
    component: NestedHome,
    exact: true,
  },
  {
    path: "/rendering/nested-1",
    component: NestedApp,
  },
  {
    path: "/rendering/nested-2",
    component: NestedAppFixed,
  },
  {
    path: "/rendering/lazy-mounting",
    component: LazyMountingHome,
    exact: true,
  },
  {
    path: "/rendering/lazy-1",
    component: LazyLoading,
  },
  {
    path: "/rendering/lazy-2",
    component: EagerLoading,
  },
  {
    path: "/memoization/memo-home",
    component: MemoizationHome,
    exact: true,
  },
  {
    path: "/memoization/react-memo",
    component: ReactMemo,
  },
  {
    path: "/memoization/use-memo",
    component: UseMemo,
  },
  {
    path: "/memoization/use-callback",
    component: UseCallback,
  },
  {
    path: "/memoization/use-ref",
    component: UseRef,
  },
  {
    path: "/memoization/use-ref-new",
    component: UseRefNew,
  },
  {
    path: "/memoization/context",
    component: Context,
  },
  {
    path: "/concurrent/home",
    component: ConcurrentHome,
    exact: true,
  },
  {
    path: "/concurrent/start-transitions",
    component: StartTransitions,
  },
  {
    path: "/concurrent/use-transitions",
    component: UseTransitions,
  },
  {
    path: "/concurrent/use-deferred",
    component: UseDeferredValue,
  },
];

export default routes;
