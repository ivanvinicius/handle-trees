import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { City } from './City';

@Entity('states')
class State {
  constructor(props: Omit<State, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  readonly id: string;

  @Column('varchar')
  name: string;

  @OneToMany(() => City, city => city.state, { cascade: true })
  city: City[];
}

export { State };
