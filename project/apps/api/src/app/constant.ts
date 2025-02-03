export const AuthorFieldDescription = {
  id: { description: 'Уникальный идентификатор автора публикации', example: 'dd4319c5-5454-420c-8025-b4af417d7f47' },
  name: { description: 'Имя автора публикации', example: 'Ivanov Ivan' },
  email: { description: 'Электронная почта автора публикации', example: 'example@email.com' },
} as const;

export const AvatarParams = {
  maxSize: 500000,
  fileType: /(jpg|jpeg|png)$/,
} as const;

export const PhotoParams = {
  maxSize: 1000000,
  fileType: /(jpg|jpeg|png)$/,
} as const;