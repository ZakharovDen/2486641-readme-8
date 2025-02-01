import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ApplicationServiceURL } from "./app.config";
import { AuthorRdo } from "./rdo/author.rdo";
import { Post } from "@project/core";

@Injectable()
export class AppService {
    constructor(
      private readonly httpService: HttpService,
    ) { }
  
  public async appendUser(posts: Post[]): Promise<void> {
    const usersIds = posts.map((post) => post.userId);
    const uniqUserIds = new Set(usersIds);

    const users: AuthorRdo[] = await Promise.all(
      Array.from(uniqUserIds).map(
        async (userId) => (await this.httpService.axiosRef.get(`${ApplicationServiceURL.Users}/${userId}`)).data
      )
    );

    posts.forEach((post) => {
      post['user'] = users.find((user) => user.id === post.userId);
    });
  }
}