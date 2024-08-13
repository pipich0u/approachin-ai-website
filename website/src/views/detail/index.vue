<template>
  <div class="detail_content">
    <div class="detail_title">
      <img src="/images/threeb.png" alt="" />
      <div class="info">
        <div class="introduce">
          <h3>{{ detailData.title }}</h3>
          <div class="text">{{ detailData.summary }}.</div>
        </div>
        <div class="iconbox">
          <div class="box download">
            <i class="icon iconfont icon-xiazai"></i>
            <span>{{ detailData.pull_count }} Puls</span>
          </div>
          <div class="box start">
            <i class="icon iconfont icon-xihuan"></i>
            <span>{{ detailData.star_count }} Stars</span>
          </div>
          <div class="box upload">
            <i class="icon iconfont icon-shizhong"></i>
            <span>{{ timeAgo(detailData.latest_updated_time) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="detail_content__main">
      <table class="table">
        <thead>
          <tr>
            <td>{{ $t('commonality.ModelName') }}</td>
            <td>{{ $t('commonality.UpdateTime') }}</td>
            <td>{{ $t('commonality.KVCacheSize') }}</td>
            <td>{{ $t('commonality.Operations') }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in detailData.kvcache" :key="index">
            <td>{{ item.llm_name }}</td>
            <td>{{ timeAgo(item.latest_updated_time) }}</td>
            <td>{{ convertBytes(item.kvcache_size) }}</td>
            <td>
              <a :href="item.kvcache_download_path" target="_blank">
                <i class="icon iconfont icon-xiazai"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="detail_content__footer">
      <h3>Readme</h3>
      <div class="book">
        <div class="book_name">书名：《三体》</div>
        <div class="author">作者：刘慈欣</div>
        <div class="book_content">
          作者介绍：刘慈欣，祖籍河南，长于山西，中国科普作家协会会员，山西省作家协会会员，高级工程师。
          自1999年处女作《鲸歌》问世以来，发表短篇科幻小说三十余篇，出版长篇科幻小说七部，并创下连续八年荣获中国科幻最高奖“银河奖”的纪录。其气势恢宏的“地球往事”系列第一部《三体》开创了《科幻世界》月刊连载原创作品之先河，一举成为2006年度最受关注、最畅销的科幻小说。2008年，“地球往事”系列第二部《黑暗森林》面世，再次成为当年最畅销的科幻小说。2010年，“地球往事”系列第三部《死神永生》出版，一举拿下该年度中国科幻“银河奖”特别奖、全球华语科幻“星云奖”最佳长篇奖。刘慈欣亦因此被评论界誉为“21世纪中国文坛最值得关注的作家”。
          刘慈欣的作品恢弘大气、想象绚丽，既注意极端空灵与厚重现实的结合，也讲求科学的内涵与人文的美感，具有浓郁的中国特色和鲜明的个人风格，为中国科幻确立了一个新高度。
          <br />三体全集共分为三本，分别是地球往事、黑暗森林、死神永生
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import type { KVcachedetail } from '../../utils/types'
import { getKVdetail } from '../../api/kVcacheInfo'
import footerVue from '../../components/footer/index.vue'
import { useI18n } from 'vue-i18n'
//state
const { t } = useI18n()
const route = useRoute()
const detailData = ref<KVcachedetail[]>([])
//func
const getdetail = async (id: string) => {
  try {
    const res: any = await getKVdetail(id)
    detailData.value = res.data
    console.log(detailData)
  } catch (err) {
    console.error(err)
  }
}
const timeAgo = (timestamp: number, currentTime: number = Date.now()) => {
  const secondsPast = Math.floor((currentTime - timestamp) / 1000)

  if (secondsPast < 60) {
    return 'Just now'
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60)
    return `${minutes} minutes ago`
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600)
    return `${hours} hours ago`
  }
  if (secondsPast < 2592000) {
    const days = Math.floor(secondsPast / 86400)
    return `${days} days ago`
  }
  if (secondsPast < 31536000) {
    const months = Math.floor(secondsPast / 2592000)
    return `${months} months ago`
  }
  const years = Math.floor(secondsPast / 31536000)
  return `${years} years ago`
}
const convertBytes = (bytes: number) => {
  const KB = 1024
  const MB = KB * 1024
  const GB = MB * 1024
  const TB = GB * 1024
  if (bytes >= TB) {
    return `${(bytes / TB).toFixed(2)} TB`
  } else if (bytes >= GB) {
    return `${(bytes / GB).toFixed(2)} GB`
  } else if (bytes >= MB) {
    return `${(bytes / MB).toFixed(2)} MB`
  } else if (bytes >= KB) {
    return `${(bytes / KB).toFixed(2)} KB`
  } else {
    return `${bytes} Bytes`
  }
}
//Hooks
onMounted(() => {
  const userId = route.query.id as string
  getdetail(userId)
})
</script>

<style scoped lang="scss">
// @media screen and (min-width: 1024px) and (max-width: 2560px) {
.detail_content {
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  .detail_title {
    width: 58%;
    margin-top: 4rem;
    display: flex;
    img {
      width: 14.5625rem;
      height: 20.875rem;
      box-shadow: 6.68px 5.34px 16.83px 0px rgba(0, 0, 0, 0.25);
    }
    .info {
      width: 49.6875rem;
      margin-left: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .introduce {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        h3 {
          display: flex;
          line-height: 1.75rem;
          font-size: 2rem;
          padding: 1rem 0;
        }
        .text {
          margin-top: 1.5rem;
          text-align: left;
          font-size: 1.125rem;
          color: rgba(102, 102, 102, 1);
        }
      }
      .iconbox {
        display: flex;
        align-items: center;
        .box {
          font-size: 1rem;
          color: black;
          font-weight: 500;
          i {
            margin-right: 0.1875rem;
          }
          span {
            font-size: 1rem;
          }
        }
        .start,
        .upload {
          margin-left: 3.75rem;
        }
      }
    }
  }
  .detail_content__main {
    width: calc(58% - 6.25rem);
    margin-top: 5rem;
    padding: 1rem 3.125rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    .table,
    table {
      width: 100%;
      border-collapse: collapse;
      thead {
        line-height: 2.5rem;
        color: black;
        tr {
          height: 3.125rem;
          line-height: 3.125rem;
          border-bottom: 1px solid #d1d1d1;
          td {
            text-align: left;
          }
        }
      }
      tbody {
        > tr {
          &:hover {
            background: #eef0fe;
          }
          td {
            text-align: left;
            color: #909399;
            line-height: 3.125rem;
          }
          td:last-child {
            a {
              i {
                color: #909399;
                &:hover {
                  color: rgba(84, 23, 254, 1);
                }
              }
            }
          }
        }
      }
    }
  }
  .detail_content__footer {
    width: calc(58% - 6.25rem);
    margin-top: 5rem;
    padding: 1rem 3.125rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    text-align: left;
    font-size: 1.125rem;
    color: rgba(102, 102, 102, 1);
    h3 {
      line-height: 1.6875rem;
    }
    .book {
      line-height: 1.5rem;
      .author {
        padding-bottom: 1.25rem;
      }
    }
  }
}
// }
</style> 