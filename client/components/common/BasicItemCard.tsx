/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { Card } from 'antd';
import { CardTitleWithLevel } from 'common/wrappers';
import { item, item_set } from 'graphql/fragments/__generated__/item';
import { useTranslation } from 'i18n';
import {
  itemCardStyle,
  BORDER_COLOR,
  itemBoxDimensions,
  ITEM_BOX_WIDTH,
} from 'common/mixins';
import ItemStatsList from './ItemStatsList';
import { WeaponElementMage } from '__generated__/globalTypes';

interface IProps {
  item: item;
  equipped?: boolean;
  openSetModal?: (set: item_set) => void;
  onClick?: () => void;
  showOnlyWeaponStats?: boolean;
  weaponElementMage?: WeaponElementMage | null;
}

const BasicItemCard: React.FC<IProps> = ({
  item,
  equipped,
  openSetModal,
  onClick,
  showOnlyWeaponStats,
  weaponElementMage,
}) => {
  const { t } = useTranslation(['common', 'stat', 'weapon_spell_effect']);
  return (
    <Card
      hoverable={!!onClick}
      size="small"
      title={
        <CardTitleWithLevel
          title={item.name}
          showBadge={equipped}
          badgeContent={t('EQUIPPED')}
          level={item.level}
        />
      }
      css={{
        ...itemCardStyle,
        [':hover']: {
          border: `1px solid ${BORDER_COLOR}`,
        },
        border: `1px solid ${BORDER_COLOR}`,
      }}
      onClick={onClick}
    >
      <div
        css={{
          float: 'right',
          marginLeft: 12,
          textAlign: 'right',
        }}
      >
        <img
          src={item.imageUrl}
          css={{
            ...itemBoxDimensions,
            marginBottom: 12,
            maxWidth: ITEM_BOX_WIDTH,
          }}
        />
      </div>
      <ItemStatsList
        item={item}
        css={{ paddingLeft: 16, marginBottom: 0 }}
        openSetModal={openSetModal}
        showOnlyWeaponStats={showOnlyWeaponStats}
        weaponElementMage={weaponElementMage}
      />
    </Card>
  );
};

export default BasicItemCard;
