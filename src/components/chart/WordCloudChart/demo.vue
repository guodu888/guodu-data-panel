<!--
 * @Author: shaohang-shy
 * @Date: 2024-02-02 18:43:20
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2024-02-02 18:43:20
 * @Description: WordCloudChart
-->
<script setup lang="ts">
import { defineClientComponent } from 'vitepress'

const WordCloudChart = defineClientComponent(() => {
  return import('./index.vue')
})

const data = `12 Love
5 Liebe
5 ፍቅር
5 Lufu
5 حب
5 Aimor
5 Amor
5 Heyran
5 ভালোবাসা
5 Каханне
5 Любоў
5 Любов
5 བརྩེ་དུང་།
5 Ljubav
5 Karantez
5 Юрату
5 Láska
5 Amore
5 Cariad
5 Kærlighed
5 Armastus
5 Αγάπη
5 Amo
5 Amol
5 Maitasun
5 عشق
5 Pyar
5 Amour
5 Leafde
5 Gràdh
5 愛
5 爱
5 પ્રેમ
5 사랑
5 Սեր
5 Ihunanya
5 Cinta
5 ᑕᑯᑦᓱᒍᓱᑉᐳᖅ
5 Ást
5 אהבה
5 ಪ್ರೀತಿ
5 სიყვარული
5 Махаббат
5 Pendo
5 Сүйүү
5 Mīlestība
5 Meilė
5 Leefde
5 Bolingo
5 Szerelem
5 Љубов
5 സ്നേഹം
5 Imħabba
5 प्रेम
5 Ái
5 Хайр
5 အချစ်
5 Tlazohtiliztli
5 Liefde
5 माया
5 मतिना
5 Kjærlighet
5 Kjærleik
5 ପ୍ରେମ
5 Sevgi
5 ਪਿਆਰ
5 پیار
5 Miłość
5 Leevde
5 Dragoste
5 Khuyay
5 Любовь
5 Таптал
5 Dashuria
5 Amuri
5 ආදරය
5 Ljubezen
5 Jaceyl
5 خۆشەویستی
5 Љубав
5 Rakkaus
5 Kärlek
5 Pag-ibig
5 காதல்
5 ప్రేమ
5 ความรัก
5 Ишқ
5 Aşk
5 محبت
5 Tình yêu
5 Higugma
5 ליבע
4 Liebe
4 ፍቅር
4 Lufu
4 حب
4 Aimor
4 Amor
4 Heyran
4 ভালোবাসা
4 Каханне
4 Любоў
4 Любов
4 བརྩེ་དུང་།
4 Ljubav
4 Karantez
4 Юрату
4 Láska
4 Amore
4 Cariad
4 Kærlighed
4 Armastus
4 Αγάπη
4 Amo
4 Amol
4 Maitasun
4 عشق`.split('\n').map((item) => {
    const [value, name] = item.split(' ')
    return { name, value: +value }
  })
</script>

<template>
  <div class="p-3">
    <WordCloudChart :data="data" class="w-full h-500px" />
  </div>
</template>
