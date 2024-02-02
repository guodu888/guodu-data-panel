<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-02 13:32:36
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-02 13:32:36
 * @Description: ScrollRank
-->
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { fade } from '../../../utils/color'
import 'swiper/css'

const props = withDefaults(defineProps<{
  data: Array<{ value: number, title: number, key: string | number, ranking: number }>
  carousel?: 'single' | 'page'
  unit?: string
  textColor?: string
  color?: string
  fontSize?: number
  slidesPerView?: number
  delay?: number
}>(), {
  carousel: 'single',
  unit: '',
  textColor: '#fff',
  color: '#1370fb',
  fontSize: 13,
  slidesPerView: 3,
  delay: 1000,
})

const computedValue = computed(() => {
  const value = props.data.map(({ value }) => value)
  const min = Math.min(...value) || 0
  // abs of min
  const minAbs = Math.abs(min)
  const max = Math.max(...value) || 0
  const total = max + minAbs
  return [minAbs, total]
})

const textColor = computed(() => {
  return props.textColor
})

const color = computed(() => {
  return props.color
})

const fadeColor = computed(() => {
  return fade(props.color, 50)
})

const fontSize = computed(() => {
  return `${props.fontSize}px`
})
</script>

<template>
  <Swiper
    :slides-per-view="props.slidesPerView"
    direction="vertical"
    :loop="true"
    :autoplay="{ delay: props.delay, pauseOnMouseEnter: true }"
    :modules="[Autoplay]"
    class="scroll-ranking"
  >
    <SwiperSlide v-for="item in props.data" :key="item.key" class="row-item">
      <div class="ranking-info">
        <div class="rank">
          No.{{ item.ranking }}
        </div>
        <div class="info-name">
          {{ item.title }}
        </div>
        <div class="ranking-value">
          {{ item.value }} {{ props.unit }}
        </div>
      </div>

      <div class="ranking-column">
        <div
          class="inside-column"
          :style="`width: ${(item.value + computedValue[0]) / computedValue[1] * 100}%;`"
        >
          <div class="shine" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.scroll-ranking {
    width: 100%;
    height: 100%;
    color: v-bind('textColor');
    overflow: hidden;
}

.scroll-ranking .row-item {
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.scroll-ranking .ranking-info {
    display: flex;
    width: 100%;
    font-size: v-bind('fontSize');
}

.scroll-ranking .ranking-info .rank {
    width: 40px;
    color: v-bind('color');
}

.scroll-ranking .ranking-info .info-name {
    flex: 1;
}

.scroll-ranking .ranking-column {
    border-bottom: 2px solid v-bind("fadeColor");
    margin-top: 5px;
}

.scroll-ranking .ranking-column .inside-column {
    position: relative;
    height: 6px;
    background-color: v-bind('color');
    margin-bottom: 2px;
    border-radius: 1px;
    overflow: hidden;
}

.scroll-ranking .ranking-column .shine {
    position: absolute;
    left: 0%;
    top: 2px;
    height: 2px;
    width: 50px;
    transform: translatex(-100%);
    background: radial-gradient(#28f8ff 5%, transparent 80%);
    animation: shine 3s ease-in-out infinite alternate;
}

@keyframes shine {
    80% {
        left: 0%;
        transform: translatex(-100%);
    }

    100% {
        left: 100%;
        transform: translatex(0%);
    }

}
</style>
