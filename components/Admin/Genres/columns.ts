import { h } from 'vue'
import type { Genre } from '@prisma/client'
import type { ColumnDef } from '@tanstack/vue-table'
import CellActions from './CellActions.vue'

export const columns: ColumnDef<Genre>[] = [
  {
    accessorKey: 'name',
    header: 'Назва',
  },
  {
    accessorKey: 'slug',
    header: 'Трансліт',
  },
  {
    accessorKey: 'createdAt',
    header: 'Дата створення',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const genre = row.original
      return h('div', { class: 'relative' }, h(CellActions, { genre }))
    },
  },
]
