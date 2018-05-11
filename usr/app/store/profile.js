import axios from 'axios';

export const state = () => ({
    profile: {},
    fetched: false,
});

export const mutations = {
    set(state, profile) {
        state.fetched = true;        
        state.profile = profile;
    },
};

export const actions = {
    async fetchProfile({ commit }) {
        const fakeAPICall = () => new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    firstName: 'Shinji',
                    lastName: 'Inui',
                    email: 'shinji_inui@yahoo.co.jp',
                    avatar: 'https://myanimelist.cdn-dena.com/r/360x360/images/characters/16/203277.jpg?s=27459691e95591094cf8e959f56382ed'
                });
            }, 3000);
        });
        const data = await fakeAPICall();
        commit('set', data);
    },
}

export const getters = {
    profile: (state) => state.profile,
    fetched: (state) => state.fetched,
}