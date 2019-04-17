export default {
    addPet: (state, { species, pet }) => {
        state[species].push(pet)
    }
}