const actions = {
    changeMoney:num => ({
        type:'CHANGE_MONEY_INPUT',
        payload:num
    }),
    changeName:num => ({
        type:'CHANGE_NAME_INPUT',
        payload:num
    }),
    changeTel:num => ({
        type:'CHANGE_TEL_INPUT',
        payload:num
    }),
    changeImg:obj => ({
        type:'CHANGE_IMG_INPUT',
        payload:obj
    }),
    TootleSlect:id => ({
        type:'TOOTLE_SLECT_BTN',
        payload:id
    }),
    AddNumCount:id => ({
        type:'ADD_NUM_COUNT',
        payload:id
    }),
    PlusNumCount:id => ({
        type:'PLUS_NUM_COUNT',
        payload:id
    }),
    alertBox:pam => ({
        type:'ALERT_BOX_ISSHOW',
        payload:pam
    })
}
export default actions