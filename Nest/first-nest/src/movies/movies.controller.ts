import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {MoviesService} from "./movies.service";
import {Movie} from "./entities/movie.entity";
import {CreateMovieDto} from "./dto/create-movie.dto";
import {UpdateMovieDto} from "./dto/update-movie.dto";

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {
    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieId: number): Movie {
        return this.moviesService.getOne(movieId);
    }


    @Patch(':id')
    updateOne(@Param('id') movieId: number, @Body() movieData: UpdateMovieDto) {
    this.moviesService.UpdateOne(movieId, movieData);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        this.moviesService.create(movieData)
        return " 성공!"
    }


}
