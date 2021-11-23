// Generated by view binder compiler. Do not edit!
package com.example.onstage.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.onstage.R;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import de.hdodenhof.circleimageview.CircleImageView;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class HomeBinding implements ViewBinding {
  @NonNull
  private final ConstraintLayout rootView;

  @NonNull
  public final ImageView logohome;

  @NonNull
  public final BottomNavigationView navbar;

  @NonNull
  public final FrameLayout newsframe;

  @NonNull
  public final CircleImageView profileImage;

  @NonNull
  public final LinearLayout searchbar;

  private HomeBinding(@NonNull ConstraintLayout rootView, @NonNull ImageView logohome,
      @NonNull BottomNavigationView navbar, @NonNull FrameLayout newsframe,
      @NonNull CircleImageView profileImage, @NonNull LinearLayout searchbar) {
    this.rootView = rootView;
    this.logohome = logohome;
    this.navbar = navbar;
    this.newsframe = newsframe;
    this.profileImage = profileImage;
    this.searchbar = searchbar;
  }

  @Override
  @NonNull
  public ConstraintLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static HomeBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static HomeBinding inflate(@NonNull LayoutInflater inflater, @Nullable ViewGroup parent,
      boolean attachToParent) {
    View root = inflater.inflate(R.layout.home, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static HomeBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.logohome;
      ImageView logohome = ViewBindings.findChildViewById(rootView, id);
      if (logohome == null) {
        break missingId;
      }

      id = R.id.navbar;
      BottomNavigationView navbar = ViewBindings.findChildViewById(rootView, id);
      if (navbar == null) {
        break missingId;
      }

      id = R.id.newsframe;
      FrameLayout newsframe = ViewBindings.findChildViewById(rootView, id);
      if (newsframe == null) {
        break missingId;
      }

      id = R.id.profile_image;
      CircleImageView profileImage = ViewBindings.findChildViewById(rootView, id);
      if (profileImage == null) {
        break missingId;
      }

      id = R.id.searchbar;
      LinearLayout searchbar = ViewBindings.findChildViewById(rootView, id);
      if (searchbar == null) {
        break missingId;
      }

      return new HomeBinding((ConstraintLayout) rootView, logohome, navbar, newsframe, profileImage,
          searchbar);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
