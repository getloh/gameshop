import reducer, { setGameInventory, setStatus, setCartVis, addToCart } from './webSlice'

describe('webSlice redux tests', () => {

    test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        games: [],
        game: {},
        status: '',
        error: '',
        cartvis: false,
        cart: [],
        filter: true
    })
    })

    test('setGameInventory should set', () => {
        const previousState = {game: {}}
        const payload = {
            "inventory_id": 2,
            "title": "Zelda: Link to the past",
            "platform": "SNES",
            "stock": 2,
            "game_id": 2,
            "release": 1991,
            "info": "The Legend of Zelda: A Link to the Past is an action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System.",
            "rating": 10,
            "votes": 1,
            "image": "https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg"
          }
        expect(reducer(previousState, setGameInventory(payload))).toEqual({game: {
            "inventory_id": 2,
            "title": "Zelda: Link to the past",
            "platform": "SNES",
            "stock": 2,
            "game_id": 2,
            "release": 1991,
            "info": "The Legend of Zelda: A Link to the Past is an action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System.",
            "rating": 10,
            "votes": 1,
            "image": "https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg"
            }
        })
    })

    test('setStatus should set', () => {
        const previousState = {status: ''}
        expect(reducer(previousState, setStatus('test status'))).toEqual({status: 'test status'})
    })

    test('setCartVis should set', () => {
        const previousState = {cartvis: false}
        const payload = {}
        expect(reducer(previousState, setCartVis())).toEqual(
         {cartvis: true}
        )
    })

    test('addToCart should add item to cart', () => {
        const previousState = {cart: []}
        const payload = {game: "test game", quantity: 8, testval: true}
        expect(reducer(previousState, addToCart(payload))).toEqual( {cart: 
         [{game: "test game", quantity: 8, testval: true}] 
        }
        )
    })

    test('addToCart should add item to cart AGAIN', () => {
        const previousState = {cart: 
            [{game: "test game", quantity: 8, testval: true}] 
           }
        const payload = {game: "wildtestappears", quantity: 3, testval: false}
        expect(reducer(previousState, addToCart(payload))).toEqual( {cart: 
         [{game: "test game", quantity: 8, testval: true}, {game: "wildtestappears", quantity: 3, testval: false}] 
        }
        )
    })

    // test('setGameInventory should set', () => {
    //     const previousState = {game: {}}
    //     const payload = {}
    //     expect(reducer(previousState, FUNCTIONNAME(payload))).toEqual(
    //      {}

    //     )
    // })

}) // end of describe