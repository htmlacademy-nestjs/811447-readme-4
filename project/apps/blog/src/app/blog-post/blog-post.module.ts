import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';
import { BlogNotifyModule } from "../blog-notify/blog-notify.module";
import { CheckAuthGuard } from '../guards/check-auth.guard';

const HTTP_CLIENT_MAX_REDIRECTS = 5;
const HTTP_CLIENT_TIMEOUT = 5000;
@Module({
  imports: [
    HttpModule.register({
      timeout: HTTP_CLIENT_TIMEOUT,
      maxRedirects: HTTP_CLIENT_MAX_REDIRECTS,
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    BlogNotifyModule
  ],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostRepository, JwtAccessStrategy, CheckAuthGuard],
})
export class BlogPostModule {}
