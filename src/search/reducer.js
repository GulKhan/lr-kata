const { fromJS } = require('immutable')

const initialState = fromJS({
    results: [
        {
            "name": "hotelone",
            "starRating": 5,
            "facilities": ["car park", "pool"]
        },
        {
            "name": "hoteltwo",
            "starRating": 3,
            "facilities": ["car park", "gym"]
        },
        {
            "name": "hotelthree",
            "starRating": 3,
            "facilities": []
        }
    ]
})

export default (state = initialState, action) => {
   switch (action.type) {

      default:
         return state
   }
}
