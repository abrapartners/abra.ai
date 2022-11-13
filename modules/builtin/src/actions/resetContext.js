/**
 * Resets the NLU context to the default scope.
 *
 * This method is contextual to the current user and chat session.
 *
 * @title Reset Context
 * @category NLU
 * @author Abra.AI, A.S.
 */
const resetContext = () => {
  event.state.session.nluContexts = []
}

return resetContext()
