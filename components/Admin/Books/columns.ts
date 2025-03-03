import { h } from 'vue'
import type { Book } from '@prisma/client'
import type { ColumnDef } from '@tanstack/vue-table'
import CellActions from './CellActions.vue'

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: 'title',
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
      const book = row.original
      return h('div', { class: 'relative' }, h(CellActions, { book }))
    },
  },
]
