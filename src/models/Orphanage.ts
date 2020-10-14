import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('Orphanages') //Decorator
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update'] //Quando cadastrar ou alterar ele automaticamente cadastrará ou alteras as imagens relacioandas ao orfanato
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}