import { defineStore } from 'pinia';
import type { PlayerProfile } from '@/types/player';
import { getDefaultPlayerProfile } from '@/utils/localStoragePlayer';

export const usePlayerStore = defineStore('player_profile', {
  state(): NewState {
    return {
      playerProfile: getDefaultPlayerProfile(),
    };
  },
  actions: {
    setplayerStore(value: PlayerProfile) {
      this.playerProfile = value;
    }
  },
  // 注意：persist定义要做判断，因为localStorage/sessionStorage是客户端参数，所以需要加process.client
  persist: process.client && {
    storage: localStorage,
  },
});

interface NewState {
    playerProfile: PlayerProfile;
}