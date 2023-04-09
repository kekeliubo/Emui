<template>
  <button class="emui-button" :class="buttonStyle"><slot></slot></button>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'
// defineOptions({ name: "emui-button" });
type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`emui-button--${buttonProps.type}`]: buttonProps.type }
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'emui-button'
})
</script>
