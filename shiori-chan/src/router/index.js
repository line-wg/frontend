// node_modules
import Vue from 'vue'
import VueRouter from 'vue-router'

// containers
import Error404 from '../containers/Error404.vue'
import EventComplete from '../containers/events/Complete.vue'
import EventConfirm from '../containers/events/Confirm.vue'
import EventCreate from '../containers/events/Create.vue'
import EventDetail from '../containers/events/Detail.vue'
import EventEdit from '../containers/events/Edit.vue'
import EventList from '../containers/events/List.vue'
import License from '../containers/licenses/License.vue'
import Manual from '../containers/manuals/Manual.vue'
import MemberConfirm from '../containers/members/Confirm.vue'
import MemberList from '../containers/members/List.vue'
import Notify from '../containers/notifies/Notify.vue'
import NotifyComplete from '../containers/notifies/Complete.vue'
import NotifyConfirm from '../containers/notifies/Confirm.vue'
import Profile from '../containers/profiles/Profile.vue'
import ProfileConfirm from '../containers/profiles/Confirm.vue'
import ProfileEdit from '../containers/profiles/Edit.vue'
import RollCallList from '../containers/roll-calls/List.vue'
import ScheduleConfirm from '../containers/schedules/Confirm.vue'
import ScheduleEdit from '../containers/schedules/Edit.vue'
import Top from '../containers/Top.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/event/complete',
    name: 'EventComplete',
    component: EventComplete
  },
  {
    path: '/event/confirm',
    name: 'EventConfirm',
    component: EventConfirm
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/event/detail',
    name: 'EventDetail',
    component: EventDetail
  },
  {
    path: '/event/edit',
    name: 'EventEdit',
    component: EventEdit
  },
  {
    path: '/event/list',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/license',
    name: 'License',
    component: License
  },
  {
    path: '/manual',
    name: 'Manual',
    component: Manual
  },
  {
    path: '/member/confirm',
    name: 'MemberConfirm',
    component: MemberConfirm
  },
  {
    path: '/member/list',
    name: 'MemberList',
    component: MemberList
  },
  {
    path: '/notify/notify',
    name: 'Notify',
    component: Notify
  },
  {
    path: '/notify/complete',
    name: 'NotifyComplete',
    component: NotifyComplete
  },
  {
    path: '/notify/confirm',
    name: 'NotifyConfirm',
    component: NotifyConfirm
  },
  {
    path: '/profile/my-profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/confirm',
    name: 'ProfileConfirm',
    component: ProfileConfirm
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: ProfileEdit
  },
  {
    path: '/roll-call/list',
    name: 'RollCallList',
    component: RollCallList
  },
  {
    path: '/schedule/confirm',
    name: 'ScheduleConfirm',
    component: ScheduleConfirm
  },
  {
    path: '/schedule/edit',
    name: 'ScheduleEdit',
    component: ScheduleEdit
  },
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
