# RN-NavigationExperimental-Redux-Example

A small demonstration app showing how to use Redux to manage navigation state in a React Native (>0.21) application using NavigationExperimental.

![Screencast of flipping through a few different screes](rn-ne-redux-demo.gif?raw=true "Screencast of functionality")

The key elements to note when trying to implement NavigationExperimental with Redux include the following:
* You don't need a `<NavigationRootContainer />`, which otherwise runs the navigation reducers, because Redux will do that for us. We lose the constant `onNavigate()` method in React's context, but that's okay because we just make more specific dispatches to navigation methods where they are needed, connected via Redux.
* This implementation is still following the `NavigationState` and `NavigationParentState` conventions established by NavigationExperimental.
* It also uses `NavigationStateUtils` to do the dirty work when reducing state.

Finally, this was just an attempt to figure out how to connect Redux and NavigationExperimental, and does not represent an ideal implementation. If you see room for improvement, please let me know.
