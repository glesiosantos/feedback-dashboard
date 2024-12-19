<script setup>
import useModal from '@/hooks/use_modal';
import { onBeforeUnmount, onMounted, reactive } from 'vue';

  const modal = useModal()
  const DEFAULT_WITH = 'w-3/4 lg:w-1/3'

  const state = reactive({
    isActive: false,
    component: {},
    props: {},
    with: DEFAULT_WITH

  })

  onMounted(() => modal.listen(handleModalToogle))

  onBeforeUnmount(() => modal.off(handleModalToogle))

  function handleModalToogle(payload) {
    if(payload.status) {
      state.component = payload.component
      state.props = payload.props
      state.with = payload.with ?? DEFAULT_WITH
    }
  }
</script>

<template>
  <teleport to='body'>
    <div
      v-if="state.isActive"
      @click="handleModalToogle({ status: false})"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div class="fixed mx-10">
        <div class="flex flex-col overflow-hidden bg-white rounded-lg animate_animanted animate__fadeInDown animate__faster">
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is='state.component'/>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
