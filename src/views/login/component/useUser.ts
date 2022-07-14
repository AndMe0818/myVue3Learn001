/**
 * @author Bilibili: 全栈之巅
 * github: https://github.com/topfullstack/vue-composables/blob/main/src/composables/useUser.ts
 */ 

// import { useStorage, StorageSerializers } from "@vueuse/core";
// import { ElMessage } from "element-plus";
import { computed, ref } from 'vue';

// const user = useStorage('user', null, undefined, {
//   serializer: StorageSerializers.object,
// });
interface userType {
  id:string|number,
  username:string,
  [k:string]:string|number
}
const user = ref<userType>({id: '', username: ''});

export const useUser = () => {
  const loginModel = ref({
    username: '',
    password: '',
  });
  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username };
    // ElMessage.success('Login success');
  };
  const loggedIn = computed(() => user.value?.id);
  const logout = async () => {
    user.value = {id: '', username: ''};
    // ElMessage.success('Logout success');
  };

  const registerModel = ref({});
  const register = async () => {
    // ElMessage.success('Register success');
  };
  return {
    loginModel,
    user,
    login,
    loggedIn,
    logout,

    registerModel,
    register,
  };
};
