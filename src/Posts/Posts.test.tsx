import { describe, expect, it, beforeEach, vi, Mock } from 'vitest';
import type { Post } from './Posts';
import { fetchPosts } from './fetchPosts';
import { render } from '@testing-library/react';
import { Posts } from './Posts';

vi.mock('./fetchPosts', () => ({
  fetchPosts: vi.fn(),
}));

describe('The Posts component', () => {
  describe('when fetching posts is a success', () => {
    let posts: Post[];
    beforeEach(() => {
      posts = [
        {
          id: 1,
          title: 'First post',
          body: 'This is the first post',
        },
        {
          id: 2,
          title: 'Second post',
          body: 'This is the second post',
        },
      ];
      (fetchPosts as Mock).mockResolvedValue(posts);
    });
    it('should display all posts', async () => {
      const { findByText } = render(<Posts />);

      for (const post of posts) {
        const matchingPost = await findByText(post.title);
        expect(matchingPost).toBeDefined();
      }
    });
  });
  describe('when fetching posts fail', () => {
    beforeEach(() => {
      (fetchPosts as Mock).mockRejectedValue(new Error('Something went wrong'));
    });
    it('should display an error', async () => {
      const { findByText } = render(<Posts />);

      const errorMessage = await findByText('There was an error');
      expect(errorMessage).toBeDefined();
    });
  });
});
