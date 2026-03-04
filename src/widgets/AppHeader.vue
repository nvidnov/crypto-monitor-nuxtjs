<template>
  <header
    class="sticky top-0 z-50 border-b border-(--ui-border) bg-(--ui-bg)/80 backdrop-blur-xl"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <UIcon
            name="i-lucide-activity"
            class="size-7 text-(--ui-primary) transition-transform group-hover:scale-110"
          />
          <span class="text-xl font-bold tracking-tight text-(--ui-text-highlighted)">
            Crypto<span class="text-(--ui-primary)">Monitor</span>
          </span>
        </NuxtLink>

        <nav class="hidden sm:flex items-center gap-1">
          <UButton
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            variant="ghost"
            color="neutral"
            size="sm"
            :icon="link.icon"
            :label="link.label"
          />
        </nav>

        <div class="flex items-center gap-2">
          <UColorModeButton />

          <template v-if="userStore.isLoggedIn">
            <UDropdownMenu :items="userMenuItems">
              <UButton variant="ghost" color="neutral" class="gap-2" size="sm">
                <UAvatar
                  :text="userInitial"
                  size="2xs"
                  class="bg-(--ui-primary)/10 text-(--ui-primary)"
                />
                <span class="hidden sm:inline text-sm font-medium">
                  {{ userStore.user?.name }}
                </span>
                <UIcon name="i-lucide-chevron-down" class="size-4 opacity-50" />
              </UButton>
            </UDropdownMenu>
          </template>

          <template v-else>
            <UButton
              to="/auth/login"
              variant="ghost"
              color="neutral"
              size="sm"
              icon="i-lucide-log-in"
              label="Войти"
              class="hidden sm:inline-flex"
            />
            <UButton
              to="/auth/login"
              variant="ghost"
              color="neutral"
              size="sm"
              icon="i-lucide-log-in"
              class="sm:hidden"
            />
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '~/entities/user/model/user'

const userStore = useUserStore()
const router = useRouter()

const userInitial = computed(() => userStore.user?.name?.charAt(0)?.toUpperCase() ?? '?')

const navLinks = [
  { label: 'Мониторинг', to: '/', icon: 'i-lucide-layout-dashboard' },
]

const userMenuItems = [
  [
    {
      label: userStore.user?.name ?? 'Пользователь',
      type: 'label' as const,
      icon: 'i-lucide-user',
    },
  ],
  [
    {
      label: 'Выйти',
      icon: 'i-lucide-log-out',
      color: 'error' as const,
      onSelect() {
        userStore.logout()
        router.push('/')
      },
    },
  ],
]
</script>
