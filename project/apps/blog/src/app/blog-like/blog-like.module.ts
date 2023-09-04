import { Module } from '@nestjs/common';
import { LikesController } from './blog-like.controller';
import { LikesService } from './blog-like.service';
import { LikeRepository } from './blog-like.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtAccessStrategy, getJwtOptions } from '@project/util/util-core';
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [LikesController],
  providers: [LikesService, LikeRepository, JwtAccessStrategy ],
  exports: [LikeRepository],
})
export class LikesModule {}
