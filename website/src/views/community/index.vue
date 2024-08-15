<template>
  <div class="home">
    <loadingVue :isLoading="loadingState.isLoading" />
    <div class="home_content">
      <div class="home_content__body">
        <div class="home_content__header-title">
          <h1>{{ $t('community.title') }}</h1>
          <p>{{ $t('community.text') }}</p>
          <div class="home_content__header-input">
            <div class="searchBox">
              <input
                v-model="seachInp"
                type="text"
                placeholder="Search for a topic..."
                class="searchInp"
                @keydown="keyBoardCommitQuestion"
              />
              <i class="icon iconfont icon-send send" @click="sendSearch" />
            </div>

            <div class="select" ref="selectbox">
              <div class="select_icon" @click="openSelect">
                <i class="icon iconfont icon-shang" v-show="selectFlag"></i>
                <i class="icon iconfont icon-xiala1" v-show="!selectFlag"></i>
              </div>
              <div class="select_value">{{ selectValue }}</div>
              <div class="select_content" v-if="selectFlag">
                <div
                  class="select_content_item"
                  v-for="(item, index) in selectData"
                  :key="index"
                  @click="selectItem(item.name)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_body">
        <div class="body_card">
          <div class="card" v-for="(item, index) in KVCacheData" :key="index">
            <div class="imgbox">
              <img src="/images/threeb.png" alt="" @click="navigatorToDetail(item.id)" />
            </div>

            <div class="card_content">
              <h3>{{ item.title }}</h3>
              <!-- <div class="name">Cixin Liu</div> -->
              <div class="introduction">
                {{ item.summary }}
              </div>
              <p></p>
            </div>
            <div class="card_content_button">
              <div class="button_left">
                <div class="download cardicon">
                  <i class="canb iconfont icon-xiazai" @click="IwantThis"></i>
                  <span class="num">{{ item.pull_count }}</span>
                  <span> Pulls</span>
                </div>
                <div class="like cardicon">
                  <i class="canb iconfont icon-like" ref="like" @click="IlikeThis(index)"></i>
                  <span class="num">{{ item.star_count }}</span>
                  <span> Stars</span>
                </div>
              </div>
              <div class="go" @click="navigatorToDetail(item.id)">
                <i class="canb iconfont icon-youjiantou"></i>
              </div>
            </div>
          </div>
          <el-empty :image-size="200" v-if="KVCacheData.length == 0" />
        </div>
        <div class="body_upload">
          <div class="prompt">
            {{ $t('community.upload') }}
          </div>
          <button class="upload" @click="openDialog">
            <i class="iconfont icon-jiahao"></i>
            {{ $t('community.uploadBtn') }}
          </button>
        </div>
      </div>
      <footerVue />
      <el-dialog
        v-model="dialogVisible"
        width="800"
        center
        :show-close="false"
        :before-close="handleClose"
        style="border-radius: 25px"
      >
        <template #header>
          <div class="dialog_header">
            <h1>{{ $t('community.title') }}</h1>
            <p>{{ $t('community.text') }}</p>
          </div>
        </template>
        <div class="dialog_body">
          <h2>{{ $t('community.info') }}</h2>
          <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
            <div class="information">
              <el-form-item prop="file">
                <el-upload
                  class="upload-demo"
                  drag
                  multiple
                  v-model="ruleForm.picture"
                  :before-upload="beforeAvatarUpload"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :on-change="onSelectFile"
                  ><el-avatar
                    fit="fill"
                    :src="imageUrl"
                    v-if="imageUrl"
                    @error="errorHandler"
                    style="width: 100%; height: 100%; position: absolute; left: 0; top: 0"
                    shape="square"
                  />
                  <el-icon class="el-icon--upload"><Plus /></el-icon>
                  <!-- <div class="el-upload__text">点击或拖拽文件到此处上传</div>
                <div class="el-upload__text">支持jpg、png、gif</div> -->
                </el-upload>
              </el-form-item>
              <div class="infor_left">
                <el-form-item prop="title">
                  <el-input class="inp" v-model="ruleForm.title" placeholder="KVCache Name" />
                </el-form-item>
                <el-form-item prop="summary">
                  <el-input
                    class="inp textare scrollbar"
                    v-model="ruleForm.summary"
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 5 }"
                    style="height: 6.25rem"
                    placeholder="Please briefly introduce the knowledge background and purpose of the KVCache you applied for"
                    resize="none"
                  />
                </el-form-item>
              </div>
            </div>
            <h2>Readme</h2>
            <div class="readme">
              <el-input
                class="textare scrollbar"
                v-model="ruleForm.readme"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4 }"
                style="height: 6.25rem"
                placeholder="Please enter your readme"
                resize="none"
                show-word-limit
                maxlength="3000"
              />
            </div>
            <h2>
              {{ $t('community.link') }}
              <span>{{ $t('community.tips') }}</span>
            </h2>
            <div class="url">
              <div class="url_input_box" v-for="(item, index) in urlData" :key="index">
                <el-input
                  type="text"
                  class="url_name"
                  placeholder="Support Model Name"
                  v-model="item.name"
                />
                <div class="url_input_box_btn">
                  <el-input
                    type="text"
                    class="url_inp"
                    placeholder="Huggingface Or ModelScope download url"
                    v-model="item.url"
                    style="border: none"
                    resize="none"
                  >
                    <template #suffix>
                      <el-icon class="icon" @click="delUrlInp(index)"><Delete /></el-icon>
                    </template>
                  </el-input>
                </div>
              </div>
              <el-button class="btn" @click="addMore"
                ><i class="icon iconfont icon-jiahao"></i>{{ $t('community.More') }}</el-button
              >
            </div>
            <div class="btn_box">
              <el-button class="btn" @click="submitForm(ruleFormRef)">{{
                $t('community.subimit')
              }}</el-button>
              <el-button class="btn" @click="handleClose">{{ $t('community.cancel') }}</el-button>
            </div>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, RouterView } from 'vue-router'
import { ref, onMounted, reactive, watch, h } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage, ElNotification } from 'element-plus'
import type { FormInstance, UploadProps, Action } from 'element-plus'
// import { fa } from 'element-plus/es/locale'
import { getAllInfo, getAllKVSummary, getKVdetail } from '../../api/kVcacheInfo'
import { createKVcacheApp } from '../../api/upload'
import type { KVcacheInfo, AllKVcacheSummary, createKVSuc } from '../../utils/types'
import footerVue from '../../components/footer/index.vue'
import loadingVue from '../../components/loading/index.vue'
import { Delete } from '@element-plus/icons-vue'
import { loadingState } from '../../api/axios'
import { useI18n } from 'vue-i18n'
//state
const { t } = useI18n()
const show = ref(true)
const route = useRoute()
const router = useRouter()
const flag = ref<boolean>(false)
const dialogVisible = ref<boolean>(false)
const inputName = ref<string>('')
const seachInp = ref<string | number | any>('')
const like = ref()
const introduceValue = ref<string>('')
const selectFlag = ref<boolean>(false)
const selectbox = ref<HTMLElement>()
const selectValue = ref<string>('')
const pullsNum = ref<number>(1234)
const starsNum = ref<number>(300)
const fileList = ref()
const ruleFormRef = ref<FormInstance>()
const imageUrl = ref()
let showLoading = ref<boolean>(true)
let KVCacheSummery = ref<AllKVcacheSummary[]>([])
let KVCacheData = ref<AllKVcacheSummary[]>([])
let urlData = reactive([
  {
    name: '',
    url: ''
  }
])
let selectData = reactive<KVcacheInfo[]>([])
let ruleForm = reactive({
  picture: {},
  title: '',
  summary: '',
  readme: ''
})
//func
const _isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return flag
}
const openDialog = () => {
  if (_isMobile()) {
    ElNotification({
      title: '',
      dangerouslyUseHTMLString: true,
      message: `${t('alert')}`,
      position: 'top-right'
    })
  } else {
    dialogVisible.value = true
  }
}
const gohome = (flag: boolean) => {
  show.value = flag
}
const getKvSummary = async () => {
  try {
    const res: any = await getAllKVSummary()
    // console.log(res)
    if (res.status == 200) {
      for (let item of res.data) {
        KVCacheSummery.value.push({
          id: item.id,
          title: item.title,
          picture: item.picture,
          pull_count: item.pull_count,
          star_count: item.star_count,
          summary: item.summary,
          llm: item.llm
        })
      }
      KVCacheData.value = KVCacheSummery.value
    }
  } catch (err) {
    console.error(err)
  }
  try {
    const res: any = await getAllInfo()
    for (let item of res.data) {
      selectData.push({
        name: item.name,
        llm_download_path: item.llm_download_path,
        id: item.id
      })
    }
    selectValue.value = selectData[0].name
  } catch (err) {
    console.error(err)
  }
}
const sendSearch = () => {
  const searchText = seachInp.value.toLowerCase()

  KVCacheData.value = KVCacheSummery.value.filter((item) => {
    // 确保 item.title 和 item.summary 存在
    const titleMatches = item.title?.toLowerCase().includes(searchText) || false
    const summaryMatches = item.summary?.toLowerCase().includes(searchText) || false

    // 确保 item.llm 存在并且是数组
    const llmMatches = item.llm?.some((i) => i.name.toLowerCase().includes(searchText)) || false

    return titleMatches || summaryMatches || llmMatches
  })
}
const fileterList = (searchText: any) => {}
const delUrlInp = (index: number) => {
  if (urlData.length <= 1) {
    ElMessage({
      message: t('community.min'),
      type: 'warning',
      plain: true
    })
    return
  }
  urlData.splice(index, 1)
}
const keyBoardCommitQuestion = (event: any) => {
  const question = seachInp.value?.trim()
  if (event.keyCode === 13) {
    event.preventDefault()
    if (!question) {
      ElMessage({
        message: 'Please enter the content!',
        type: 'warning',
        plain: true
      })
      return
    }
    sendSearch()
  }
}
const checkName = (rule: any, value: any, callback: any) => {
  if (value == '') {
    return callback(new Error('Please input the name'))
  }
  if (typeof value !== 'string') {
    return callback(new Error('Name must be a string'))
  }
  if (value.length < 2) {
    return callback(new Error('Name must be at least 2 characters'))
  }
  callback()
}
const checkIntroduction = (rule: any, value: any, callback: any) => {
  if (value == '') {
    return callback(new Error('Please input the introduction'))
  }
  if (typeof value !== 'string') {
    return callback(new Error('Introduction must be a string'))
  }
  if (value.length < 10) {
    return callback(new Error('Introduction must be at least 10 characters'))
  }
  callback()
}
const checkImageUpload = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please upload an image'))
  }
  console.log(value, '12')

  if (!imageUrl.value.includes(value.type)) {
    return callback(new Error('Only JPEG and PNG images are allowed'))
  }
  callback()
}
const handleAvatarSuccess: UploadProps['onSuccess'] = (uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
// upload your avatar
const onSelectFile = (uploadFile: any) => {
  if (uploadFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  ruleForm.picture = uploadFile.raw
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imageUrl.value = reader.result
  }
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (!rawFile.type.startsWith('image/')) {
    ElMessage.error('Avatar picture must be IMAGE format!')
    return false
  }
}
const errorHandler = () => {
  imageUrl.value = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
}
const rules = reactive({
  title: [{ validator: checkName, trigger: 'blur' }],
  summary: [{ validator: checkIntroduction, trigger: 'blur' }],
  picture: [{ validator: checkImageUpload, trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate(async (valid) => {
    if (valid) {
      console.log(ruleForm, 'Form Data')

      try {
        const res = await createKVcacheApp(ruleForm)
        console.log(res, 'Response from API')
      } catch (err) {
        console.error('Error while creating KVCache app:', err)
      }

      console.log('Form submitted successfully!')
      // 这里可以返回 void 或 Promise<void>
      return // 或者使用 `return Promise.resolve();`
    } else {
      console.log('Form validation failed, submission error!')
      // 这里不需要返回 false
      return // 或者使用 `return Promise.resolve();`
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const addMore = () => {
  if (urlData.length >= 5) {
    ElMessage({
      message: t('community.wran'),
      type: 'warning',
      plain: true
    })
    return
  }

  urlData.push({
    name: '',
    url: ''
  })
}

const IlikeThis = (index: number) => {
  starsNum.value++
  // like.value[index].style.color = 'red'
  if (like.value[index].style.color == 'red') {
    like.value[index].style.color = 'black'
  } else {
    like.value[index].style.color = 'red'
  }
}
const IwantThis = () => {
  pullsNum.value++
}
const navigatorToDetail = (item: any) => {
  if (_isMobile()) {
    ElNotification({
      title: '',
      dangerouslyUseHTMLString: true,
      message: `${t('alert')}`,
      position: 'top-right'
    })
  } else {
    router.push({ path: '/index/detail', query: { id: item } })
  }
}
const openSelect = () => {
  selectFlag.value = !selectFlag.value
  if (selectbox.value && selectFlag.value) {
    selectbox.value?.classList.add('border')
  } else {
    selectbox.value?.classList.remove('border')
  }
}
const selectItem = (item: string) => {
  selectValue.value = item
  KVCacheData.value = KVCacheSummery.value.filter((item) => {
    return item.llm.some((i) => i.name.toLowerCase().includes(selectValue.value)) // 使用 some() 返回布尔值
  })
  openSelect()
}
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      resetForm(ruleFormRef.value)
      urlData.length = 0
      urlData.push({
        name: '',
        url: ''
      })
      dialogVisible.value = false
      done()
    })
    .catch(() => {
      // catch error
    })
}
const submitFrom = () => {
  resetForm(ruleFormRef.value)
  dialogVisible.value = false
  urlData.length = 0
  urlData.push({
    name: '',
    url: ''
  })
}
//Hooks
watch(selectFlag, () => {
  if (selectFlag.value) {
    document.addEventListener('click', function (e) {
      if ((e.srcElement as HTMLElement)?.className != 'icon iconfont icon-xiala1') {
        selectFlag.value = false
        selectbox.value?.classList.remove('border')
      }
    })
  }
})
onMounted(() => {
  getKvSummary()
})
</script>

<style scoped lang="scss">
@media only screen and (min-width: 767px) {
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .home_content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .home_content__body {
        width: 100%;
        position: relative;
        height: 19.375rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .home_content__header-title {
          width: 620px;
          height: 10.625rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 50px;
          h1 {
            font-size: 40px;
            font-weight: 600;
          }
          p {
            font-size: 20px;
            height: 20px;
            margin-top: 1.125rem;
            margin-top: 24px;
          }
          .home_content__header-input {
            margin-top: 2.625rem;
            display: flex;
            justify-content: center;
            .searchBox {
              position: relative;
              input {
                width: 27.6875rem;
                height: 3rem;
                border-radius: 0.625rem !important;
                border: 0.0313rem solid #ffffff;
                outline: none;
                padding: 0 1.875rem;
                font-size: 1rem;
              }
              .send {
                position: absolute;
                right: 4%;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1.25rem;
                color: #bcbcbc;
                &:hover {
                  cursor: pointer;
                  color: black;
                }
                &:active {
                  transform: scale(0.9) translateY(-50%);
                }
              }

              input:focus {
                border: 0.0313rem solid #ffa43c;
              }
            }
            @keyframes dropdownToggle {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .border {
              border-radius: 0.625rem 0.625rem 0 0 !important;
              transition: 0.5s all;
            }
            .select {
              margin-left: 1.375rem;
              display: flex;
              width: 11.25rem;
              height: 3.125rem;
              transition: 0.5s all;
              border-radius: 1.5625rem;
              // border: 1px solid rgb(161, 161, 161);
              background: #fff;
              color: #686868;
              justify-content: space-evenly;
              align-items: center;
              font-size: 16px;
              position: relative;
              .select_value {
                width: 6.25rem;
                font-size: 0.875rem;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .select_icon {
                margin-left: 0.3125rem;
                cursor: pointer;
                .icon {
                  transition: 0.5s all;
                }
              }
              .select_icon:hover {
                color: black;
              }
              .select_content {
                position: absolute;
                left: 0;
                top: 2.8125rem;
                width: 100%;
                height: 10.375rem;
                background: #ffffff;
                border-radius: 0 0 0.625rem 0.625rem;
                display: flex;
                flex-direction: column;
                // justify-content: space-evenly;
                align-items: center;
                animation: dropdownToggle 0.5s ease;
                border-top: none;
                .select_content_item {
                  width: 6.25rem;
                  font-size: 0.875rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding: 0 20px;
                  border-bottom: 1px solid rgba(236, 236, 236, 1);
                  align-content: center;
                  height: 3.125rem;
                  cursor: pointer;
                  &:hover {
                    color: rgba(84, 23, 254, 1);
                    white-space: pre-wrap;
                  }
                }
              }
            }
          }
        }
      }
      .home_body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        min-height: 31.25rem;
        .body_card {
          width: 77.25rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin-top: 2rem;
          // background: #fff;
          .card {
            width: 25rem;
            // height: 27.5rem;
            height: 26rem;
            box-shadow: 0.125rem 0.125rem 1.25rem rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(236, 236, 236, 1);
            background: #fff;
            .imgbox {
              width: 100%;
              height: 210px;
              // background: linear-gradient(to bottom,, rgba(96, 60, 255, 0));
              background: linear-gradient(
                156.23deg,
                rgba(60, 68, 255, 0.1) -13.04%,
                rgba(96, 60, 255, 0) 79.89%
              );
              // opacity: 0.1;
              border-radius: 7px;

              img {
                width: 7.1875rem;
                height: 10.25rem;
                cursor: pointer;
                margin: 1.25rem auto;
              }
            }
            .card_content {
              padding: 0.3125rem 0.625rem;
              h3 {
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                line-height: 1.8rem;
              }
              .name {
                font-weight: 400;
                font-size: 14px;
                line-height: 1.35rem;
                color: rgba(153, 153, 153, 1);
              }
              .introduction {
                margin-top: 12px;
                margin-bottom: 40px;
                line-height: 24px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; /* 限制为3行 */
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                font-size: 14px;
                width: 22.25rem;
                margin-left: 10px;
              }
              p {
                height: 1px;
                background: #efefef;
                margin: 12px 0;
              }
            }
            .card_content_button {
              display: flex;
              color: black;
              padding: 0 1.875rem;
              justify-content: space-around;
              .button_left {
                display: flex;
                align-items: center;
                .cardicon {
                  cursor: pointer;
                  user-select: none;
                  i {
                    margin-right: 0.625rem;
                    font-size: 14px;
                    &:hover {
                      color: #888685;
                    }
                  }
                  span {
                    font-size: 14px;
                  }
                }
                .like {
                  margin-left: 2.1875rem;
                  font-size: 1rem;
                }
              }
              .go {
                width: 54px;
                height: 32px;
                font-size: 24px;
                color: black;
                border-radius: 0.5rem;
                &:hover {
                  color: white;
                  background: linear-gradient(
                    to right,
                    rgba(54, 98, 255, 1),
                    rgba(132, 63, 243, 1)
                  );
                }
              }
            }
          }
        }
        .body_upload {
          width: 77.25rem;
          height: 200px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin: 1rem 0;
          border: 1px solid rgba(236, 236, 236, 1);
          box-shadow: 0.125rem 0.125rem 1.25rem rgba(0, 0, 0, 0.1);
          background: #fff;
          border-radius: 8px;
          .prompt {
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-align: left;
          }
          .upload {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            font-size: 14px;
            border: none;
            color: white;
            width: 137px;
            height: 40px;
            border-radius: 8px;
            background: linear-gradient(to right, rgba(54, 98, 255, 1), rgba(132, 63, 243, 1));
            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 375px) and (max-width: 767px) {
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .home_content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .home_content__body {
        margin-top: 1.875rem;
        width: 100%;
        position: relative;
        height: 12.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .home_content__header-title {
          // width: 23.4375rem;
          padding: 0 5%;
          height: 3.75rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // padding-top: 50px;
          h1 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          p {
            font-size: 0.875rem;
            height: 1.25rem;
            margin-top: 1rem;
          }
          .home_content__header-input {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            .searchBox {
              position: relative;
              input {
                width: 80%;
                height: 2.5rem;
                border-radius: 0.625rem !important;
                border: 0.0313rem solid #ffffff;
                outline: none;
                padding: 0 1.875rem;
                font-size: 1rem;
              }
              .send {
                position: absolute;
                right: 4%;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1.25rem;
                color: #bcbcbc;
                &:hover {
                  cursor: pointer;
                  color: black;
                }
                &:active {
                  transform: scale(0.9) translateY(-50%);
                }
              }

              input:focus {
                border: 0.0313rem solid #ffa43c;
              }
            }
            @keyframes dropdownToggle {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .border {
              border-radius: 0.625rem 0.625rem 0 0 !important;
              transition: 0.5s all;
            }
            .select {
              display: none;
            }
          }
        }
      }
      .home_body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        min-height: 31.25rem;
        .body_card {
          // width: 77.25rem;
          padding: 0 5%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          // background: #fff;
          .card {
            width: 20rem;
            height: 24rem;
            margin: 0.5rem 0;
            box-shadow: 0.125rem 0.125rem 1.25rem rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(236, 236, 236, 1);
            background: #fff;
            .imgbox {
              width: 100%;
              height: 210px;
              // background: linear-gradient(to bottom,, rgba(96, 60, 255, 0));
              background: linear-gradient(
                156.23deg,
                rgba(60, 68, 255, 0.1) -13.04%,
                rgba(96, 60, 255, 0) 79.89%
              );
              // opacity: 0.1;
              border-radius: 7px;

              img {
                width: 7.1875rem;
                height: 10.25rem;
                cursor: pointer;
                margin: 1.25rem auto;
              }
            }
            .card_content {
              h3 {
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                line-height: 1.8rem;
              }
              .introduction {
                margin-top: 0.75rem;
                padding: 0 3%;
                margin-bottom: 1.25rem;
                line-height: 1.5rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; /* 限制为3行 */
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                font-size: 0.75rem;
              }
              p {
                height: 1px;
                background: #efefef;
                margin: 12px 0;
              }
            }
            .card_content_button {
              display: flex;
              color: black;
              justify-content: space-around;
              .button_left {
                display: flex;
                align-items: center;
                .cardicon {
                  cursor: pointer;
                  user-select: none;
                  i {
                    margin-right: 0.625rem;
                    font-size: 14px;
                    &:hover {
                      color: #888685;
                    }
                  }
                  span {
                    font-size: 14px;
                  }
                }
                .like {
                  margin-left: 2.1875rem;
                  font-size: 1rem;
                }
              }
              .go {
                width: 54px;
                height: 32px;
                font-size: 24px;
                color: black;
                border-radius: 0.5rem;
                &:hover {
                  color: white;
                  background: linear-gradient(
                    to right,
                    rgba(54, 98, 255, 1),
                    rgba(132, 63, 243, 1)
                  );
                }
              }
            }
          }
        }
        .body_upload {
          width: 90%;
          height: 200px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin: 1rem 0;
          border: 1px solid rgba(236, 236, 236, 1);
          box-shadow: 0.125rem 0.125rem 1.25rem rgba(0, 0, 0, 0.1);
          background: #fff;
          border-radius: 8px;
          .prompt {
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-align: center;
          }
          .upload {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            font-size: 14px;
            border: none;
            color: white;
            width: 137px;
            height: 40px;
            border-radius: 8px;
            background: linear-gradient(to right, rgba(54, 98, 255, 1), rgba(132, 63, 243, 1));
            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.el-dialog {
  padding: 0 !important;
  height: 730px;
}
.dialog_header {
  background-color: #fff;
  width: 100%;
  height: 5rem;
  color: black;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  h1 {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }
}
.dialog_body {
  display: flex;
  flex-direction: column;
  border-radius: 1.5625rem !important;
  padding: 0 5%;
  h2 {
    display: flex;
    font-size: 1rem;
    line-height: 1.75rem;
    color: black;
    font-weight: 600;
    justify-content: space-between;
    span {
      font-size: 0.875rem;
      color: rgba(96, 60, 255, 1);
      font-weight: normal;
    }
  }
  .information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 0;
    .upload-demo {
      width: 15rem;
      height: 10rem;
    }
    .infor_left {
      width: 27rem;
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      .inp {
        width: 100%;
        height: 2.5rem;
      }
      .textare {
        height: 7.5rem;
        textarea {
          padding: 0.625rem 0;
        }
      }
    }
  }
  .url {
    text-align: center;
    margin: 0.8rem 0;
    .btn {
      width: 100%;
      height: 2.5rem;
      text-align: center;
      color: #bcbcbc;
    }
    .btn:hover {
      color: black;
      border: 1px solid #898989;
    }
    .url_input_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.75rem 0;
      .url_name {
        width: 13.75rem;
        height: 2.5rem;
        margin-right: 0.625rem;
      }
      .url_input_box_btn {
        width: 30rem;
        height: 2.5rem;
        position: relative;
        .url_inp {
          height: 2.5rem;
          .icon:hover {
            cursor: pointer;
            color: black;
          }
        }
      }
    }
  }
  .readme {
    margin: 0.5rem 0;
    .textare {
      height: 8rem;
    }
  }
  .btn_box {
    margin-top: 1.25rem;
    display: flex;
    justify-content: flex-end;
    .btn {
      border: none;
      border-radius: 0.5rem;
    }
    .btn:nth-child(1) {
      background: linear-gradient(to right, rgba(54, 98, 255, 1), rgba(132, 63, 243, 1));
      color: #fff;
    }
    .btn:nth-child(1):hover {
      background: linear-gradient(to left, rgba(54, 98, 255, 1), rgba(132, 63, 243, 1));
      color: #fff;
    }
    .btn:nth-child(2) {
      border: 1px solid rgba(236, 236, 236, 1);
      color: black;
    }
    .btn:nth-child(2):hover {
      background: #c5c5c5;
      color: #fffefe;
      border: 1px solid #c5c5c5;
    }
  }
}
</style>