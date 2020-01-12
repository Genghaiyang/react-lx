const initState = {
    formData:{
      moneyCount:'100.00',
      userName:'耿海洋',
      userTel:'12345678912'
    },
    //products:[],
    ticket:{surl:'',name:'上传图片'},
    alertBox:{title:'暂无提示',isshow:false}
}

const appReducer = (state = initState, action)=>{
    switch (action.type) {
        case 'CHANGE_MONEY_INPUT':
         return {...state,formData:{
           ...state.formData,...{moneyCount:action.payload}
           }
        }
         // return Object.assign({}, state, {ticket:'123'})
        case 'CHANGE_NAME_INPUT':
          return {...state,formData:{
            ...state.formData,...{userName:action.payload}
            }
         }
         
        case 'CHANGE_TEL_INPUT':
          return {...state,formData:{
            ...state.formData,...{userTel:action.payload}
            }
         }

        case 'CHANGE_IMG_INPUT':
          return {...state,...{
            ticket:{surl:window.URL.createObjectURL(action.payload),name:action.payload.name}
          }
         }

        case 'ALERT_BOX_ISSHOW':
          return {...state,...{
            alertBox:{title:action.payload.title,isshow:action.payload.isshow}
          }
         }

        default:
          return state
      }
}
export default appReducer