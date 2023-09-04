import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import { BlogCommentRepository } from './blog-comment.repository';
import { BlogCommentController } from './blog-comment.controller';
import { BlogCommentService } from './blog-comment.service';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions
    }),
  ],
  controllers: [BlogCommentController],
  providers: [BlogCommentService, BlogCommentRepository, JwtAccessStrategy],
  exports: [BlogCommentRepository]
})
export class BlogCommentModule {}
