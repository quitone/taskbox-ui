<template>
  <div>
    <pure-inbox-screen :eror="true" />
  </div>
</template>

<script>
import PureInboxScreen from './PureInboxScreen';
export default {
  name: 'InboxScreen',
  components: {
    PureInboxScreen
  }
}
</script>
