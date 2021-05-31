import type { PendingFile } from '@geislabs/file'

export interface ImageAdapter {
    create: (selector: string) => PendingFile
}
