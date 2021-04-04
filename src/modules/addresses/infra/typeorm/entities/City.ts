import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { State } from './State';

@Entity('cities')
class City {
  constructor(props: Omit<City, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  readonly id: string;

  @Column('uuid')
  readonly state_id: string;

  @Column('varchar')
  name: string;

  @ManyToOne(() => State, state => state.city, { eager: true })
  @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
  state: State;
}

export { City };
