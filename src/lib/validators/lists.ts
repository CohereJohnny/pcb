import { z } from 'zod';
import { LIST_TYPES } from '@/lib/constants/listTypes';

// Create an array of the keys from LIST_TYPES for use in Zod enum
// Zod nativeEnum works better with 'as const' objects directly
// const listTypeValues = Object.keys(LIST_TYPES) as [keyof typeof LIST_TYPES, ...(keyof typeof LIST_TYPES)[]];

export const listSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional(),
    // Use nativeEnum with the actual LIST_TYPES object keys
    type: z.nativeEnum(LIST_TYPES, { 
        errorMap: () => ({ message: 'Please select a valid list type.' })
    }),
});

export type ListFormData = z.infer<typeof listSchema>; 