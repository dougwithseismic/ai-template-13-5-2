import React, { createContext, useReducer, useContext, ReactNode, Dispatch, useCallback } from 'react';

// Define the state and action types
interface LayoutDrawerState {
  leftPanelOpen: boolean;
  rightPanelOpen: boolean;
}

interface LayoutDrawerAction {
  type: 'TOGGLE_LEFT_PANEL' | 'TOGGLE_RIGHT_PANEL';
}

interface LayoutDrawerProviderProps {
  children: ReactNode;
  initialLeftPanelOpen?: boolean;
  initialRightPanelOpen?: boolean;
}

// Define the context type explicitly
type LayoutDrawerContextType = [LayoutDrawerState, Dispatch<LayoutDrawerAction>] | null;

const initialLayoutDrawerState: LayoutDrawerState = {
  leftPanelOpen: true,
  rightPanelOpen: false,
};

// Create the context with the explicit type
const LayoutDrawerContext = createContext<LayoutDrawerContextType>(null);

const layoutDrawerReducer = (state: LayoutDrawerState, action: LayoutDrawerAction): LayoutDrawerState => {
  switch (action.type) {
    case 'TOGGLE_LEFT_PANEL':
      return { ...state, leftPanelOpen: !state.leftPanelOpen };
    case 'TOGGLE_RIGHT_PANEL':
      return { ...state, rightPanelOpen: !state.rightPanelOpen };
    default:
      return state;
  }
};

export const LayoutDrawerProvider: React.FC<LayoutDrawerProviderProps> = ({
  children,
  initialLeftPanelOpen = true,
  initialRightPanelOpen = false,
}) => {
  const [state, dispatch] = useReducer(layoutDrawerReducer, {
    leftPanelOpen: initialLeftPanelOpen,
    rightPanelOpen: initialRightPanelOpen,
  });

  return (
    <LayoutDrawerContext.Provider value={[state, dispatch]}>
      {children}
    </LayoutDrawerContext.Provider>
  );
};

export const useLayoutDrawers = () => {
  const context = useContext(LayoutDrawerContext);

  if (context === null) {
    throw new Error("useLayoutDrawers must be used within a LayoutDrawerProvider");
  }

  const [state, dispatch] = context;

  const toggleLeftPanel = useCallback(() => {
    dispatch({ type: 'TOGGLE_LEFT_PANEL' });
  }, [dispatch]);

  const toggleRightPanel = useCallback(() => {
    dispatch({ type: 'TOGGLE_RIGHT_PANEL' });
  }, [dispatch]);

  return { ...state, toggleLeftPanel, toggleRightPanel };
};
