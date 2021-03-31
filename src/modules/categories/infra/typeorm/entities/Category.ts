import {
  Entity,
  Tree,
  Column,
  PrimaryColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('categories')
@Tree('materialized-path')
class Category {
  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  readonly id: string;

  @TreeLevelColumn()
  parent_id: string;

  @Column('varchar')
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}

export { Category };
