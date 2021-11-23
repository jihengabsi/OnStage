// Generated by view binder compiler. Do not edit!
package com.example.onstage.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.onstage.R;
import com.google.android.material.button.MaterialButton;
import de.hdodenhof.circleimageview.CircleImageView;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class SettingsBinding implements ViewBinding {
  @NonNull
  private final ConstraintLayout rootView;

  @NonNull
  public final MaterialButton Backprevious;

  @NonNull
  public final ImageView greylogo;

  @NonNull
  public final CircleImageView profileImage;

  private SettingsBinding(@NonNull ConstraintLayout rootView, @NonNull MaterialButton Backprevious,
      @NonNull ImageView greylogo, @NonNull CircleImageView profileImage) {
    this.rootView = rootView;
    this.Backprevious = Backprevious;
    this.greylogo = greylogo;
    this.profileImage = profileImage;
  }

  @Override
  @NonNull
  public ConstraintLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static SettingsBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static SettingsBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.settings, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static SettingsBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.Backprevious;
      MaterialButton Backprevious = ViewBindings.findChildViewById(rootView, id);
      if (Backprevious == null) {
        break missingId;
      }

      id = R.id.greylogo;
      ImageView greylogo = ViewBindings.findChildViewById(rootView, id);
      if (greylogo == null) {
        break missingId;
      }

      id = R.id.profile_image;
      CircleImageView profileImage = ViewBindings.findChildViewById(rootView, id);
      if (profileImage == null) {
        break missingId;
      }

      return new SettingsBinding((ConstraintLayout) rootView, Backprevious, greylogo, profileImage);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
