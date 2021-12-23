import React from 'react';
import styles from './index.module.css';

export default function Pager({ page = 1, limit = 10, total = 0, onPageChange }) {
  if (total == 0) {
    return null;
  }
  const pageNumber = Math.ceil(total / limit);

  function createSpan(content, newPage) {
    return (
      <span
        onClick={() => {
          onPageChange && onPageChange(newPage);
        }}
      >
        {content}
      </span>
    );
  }

  return (
    <div className={styles.pager}>
      {page > 1 && createSpan('首页', 1)}
      {page > 1 && createSpan('上一页', page - 1)}
      {createSpan(`${page} / ${pageNumber}`, page)}
      {page < pageNumber && createSpan('下一页', page + 1)}
      {page < pageNumber && createSpan('尾页', pageNumber)}
    </div>
  );
}
