import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostQuery } from './blog-post.query';
import { PaginationResult } from '@project/core';

@Injectable()
export class BlogPostService {
    constructor(
      private readonly blogPostRepository: BlogPostRepository
    ) { }
  
  public async create(dto: CreatePostDto): Promise<BlogPostEntity> {
    const newPost = new BlogPostEntity(dto)
    await this.blogPostRepository.save(newPost);
    return newPost;
  }

  public async findAll(query: BlogPostQuery): Promise<PaginationResult<BlogPostEntity>> {
    return await this.blogPostRepository.findAll(query);
  }

  public async findById(id: string): Promise<BlogPostEntity> {
    return await this.blogPostRepository.findById(id);
  }

  public async update(id: string, dto: UpdatePostDto) {
    return `This action updates a #${id} blogPostModule`;
  }

  public async remove(id: string): Promise<void> {
    return await this.blogPostRepository.deleteById(id);
  }
}
