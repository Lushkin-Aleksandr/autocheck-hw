

export type ThemeStateType = { themeId: number }
type ActionType = ChangeThemeIdActionType


const initState: ThemeStateType = {
    themeId: 1,
}


export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}


type ChangeThemeIdActionType = { type: 'SET_THEME_ID', id: number }
export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any
