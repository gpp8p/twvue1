import { defineStore } from 'pinia'

export const useLoginStateStore = defineStore('loginState', {
    state: () => {
        return {}
    },
    // could also be defined as
    // state: () => ({ count: 0 })

})
