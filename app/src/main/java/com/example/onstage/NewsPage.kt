package com.example.onstage

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.animation.AnimationUtils
import android.widget.LinearLayout
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.onstage.data.Post
import kotlinx.android.synthetic.main.fragment_news_page.*
import com.example.onstage.postList.PostAdapter
import com.example.onstage.R
import com.example.onstage.postList.NormalPostAdapter
import kotlinx.android.synthetic.main.home.*

class NewsPage: Fragment(){

    lateinit var recylcerPost: RecyclerView
    lateinit var nrecyclerPost:RecyclerView
    lateinit var recylcerPostAdapter: PostAdapter
    lateinit var nrecylcerPostAdapter: NormalPostAdapter

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_news_page,container,false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        recylcerPost = recyclerPost

        nrecyclerPost= normalrecyclerPost


        var postList : MutableList<Post> = ArrayList()
        var normalpostList : MutableList<Post> = ArrayList()

        postList.add(Post(postPic = R.drawable.ic_vr, postName = "Tech", postRole = "7 min read" ))
        postList.add(Post(postPic = R.drawable.ic_phone, postName = "Tech", postRole = "7 min read" ))

        for (i in 1..5) {
            normalpostList.add(Post(postPic = R.drawable.ic_vr, postName = "Tech", postRole = "7 min read" ))
            normalpostList.add(Post(postPic = R.drawable.ic_phone, postName = "Tech", postRole = "7 min read" ))
        }


        recylcerPostAdapter = PostAdapter(postList)

        recylcerPost.adapter = recylcerPostAdapter

        recylcerPost.layoutManager = LinearLayoutManager(recylcerPost.context, LinearLayoutManager.HORIZONTAL,false)

        nrecylcerPostAdapter = NormalPostAdapter(normalpostList)

        nrecyclerPost.adapter = nrecylcerPostAdapter
        nrecyclerPost.layoutManager = LinearLayoutManager(recylcerPost.context, LinearLayoutManager.VERTICAL,false)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }
}