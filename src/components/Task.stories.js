import { action } from '@storybook/addon-actions';
import Task from './Task';

export default {
  title: 'task',
  excludeStories: /.*Data$/,
  components: { Task },
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0)
}

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`

export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => taskData
    }
  },
  methods: { ...actionsData },
})

export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({ ...taskData, state: 'TASK_PINNED' })
    }
  },
  methods: { ...actionsData },
})

export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({ ...taskData, state: 'TASK_ARCHIVED' })
    }
  },
  methods: { ...actionsData },
})