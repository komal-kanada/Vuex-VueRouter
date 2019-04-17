export default {
    animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    },
    getAllcats: (state) => {
        return state.pets.filter((pet) => {
            return pet.species === 'cat'
        })
    }
}