"""empty message

Revision ID: fdde057164c6
Revises: fe8775e9f207
Create Date: 2020-04-06 18:59:09.227089

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = "fdde057164c6"
down_revision = "fe8775e9f207"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    weapon_element_mage_enum = sa.Enum(
        "EARTH_85",
        "EARTH_68",
        "EARTH_50",
        "FIRE_85",
        "FIRE_68",
        "FIRE_50",
        "WATER_85",
        "WATER_68",
        "WATER_50",
        "AIR_85",
        "AIR_68",
        "AIR_50",
        name="weaponelementmage",
    )

    weapon_element_mage_pg_enum = postgresql.ENUM(
        "EARTH_85",
        "EARTH_68",
        "EARTH_50",
        "FIRE_85",
        "FIRE_68",
        "FIRE_50",
        "WATER_85",
        "WATER_68",
        "WATER_50",
        "AIR_85",
        "AIR_68",
        "AIR_50",
        name="weaponelementmage",
    )

    weapon_element_mage_pg_enum.create(op.get_bind())

    op.add_column(
        "equipped_item",
        sa.Column("weapon_element_mage", weapon_element_mage_enum, nullable=True,),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("equipped_item", "weapon_element_mage")

    weapon_element_mage_pg_enum = postgresql.ENUM(
        "EARTH_85",
        "EARTH_68",
        "EARTH_50",
        "FIRE_85",
        "FIRE_68",
        "FIRE_50",
        "WATER_85",
        "WATER_68",
        "WATER_50",
        "AIR_85",
        "AIR_68",
        "AIR_50",
        name="weaponelementmage",
    )
    weapon_element_mage_pg_enum.drop(op.get_bind())
    # ### end Alembic commands ###
