import {Injectable, NotFoundException} from '@nestjs/common';
import {Movie} from "./entities/movie.entity";
import {UpdateMovieDto} from "./dto/update-movie.dto";

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found. `)
        }

        return movie;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    UpdateOne(id: number, movieData: UpdateMovieDto) {
        const movie = this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id);
        this.movies.push({...movie, ...movieData})
    }
}
