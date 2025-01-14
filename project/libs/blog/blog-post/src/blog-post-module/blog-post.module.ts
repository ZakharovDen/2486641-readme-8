import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { PrismaClientModule } from '@project/models';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostFactory } from './blog-post.factory';

@Module({
  imports: [PrismaClientModule],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostFactory, BlogPostRepository],
  exports: [BlogPostService],
})
export class BlogPostModule {}
