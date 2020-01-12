const initState = {

  products: [
    {
      name: '书籍1',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍2',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍3',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍4',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍5',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍6',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍7',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍8',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍8',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍8',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍8',
      count: 0,
      isSlect: true
    },
    {
      name: '书籍end',
      count: 0,
      isSlect: true
    }

  ]

}

const listReducer = (state = initState, action) => {
  let newlist = []
  switch (action.type) {
    case 'TOOTLE_SLECT_BTN':
      newlist = newlist.concat([...state.products])
      newlist[action.payload].isSlect = !newlist[action.payload].isSlect
      return { products: newlist }
    // return Object.assign({}, state, {ticket:'123'})
    case 'ADD_NUM_COUNT':
      newlist = newlist.concat([...state.products])
      newlist[action.payload].count += 1
      return { products: newlist }

    case 'PLUS_NUM_COUNT':
      newlist = newlist.concat([...state.products])
      newlist[action.payload].count > 0 ? newlist[action.payload].count -= 1 : newlist[action.payload].count = 0
      return { products: newlist }


    default:
      return state
  }
}
export default listReducer