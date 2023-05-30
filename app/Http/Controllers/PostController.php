<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::with('user:id,name')->latest()->get(),
        ]);
    }

    public function store(Request $request) : RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $request->user()->posts()->create($validated);

        return redirect(route('posts.index'));
    }

    public function destroy(Post $post) : RedirectResponse
    {
        $post->delete();

        return redirect(route('posts.index'));
    }
}
